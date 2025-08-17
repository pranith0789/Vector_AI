from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List,Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id:str

class Edge(BaseModel):
    source:str
    target:str

class Flow(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

visited=set()
rec_stack=set()

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    adj = {node.id: [] for node in nodes}
    for edge in edges:
        adj[edge.source].append(edge.target)

    visited = set()
    rec_stack = set()

    def dfs(node_id):
        if node_id not in visited:
            visited.add(node_id)
            rec_stack.add(node_id)
            for neighbor in adj[node_id]:
                if neighbor not in visited and dfs(neighbor):
                    return True
                elif neighbor in rec_stack:
                    return True
            rec_stack.remove(node_id)
        return False

    for node in nodes:
        if dfs(node.id):
            return False  
    return True  


@app.post("/check-dag")
async def check_dag(flow:Flow):
    print("Function started")
    result=is_dag(flow.nodes,flow.edges)
    print(result)
    return {"isDAG":result}
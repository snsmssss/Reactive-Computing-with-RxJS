import networkx as nx

# Create an empty undirected graph
G = nx.Graph()

# Add friendships to the graph
friendships = [
    ("Alice", "Bob"),
    ("Alice", "Carol"),
    ("Bob", "Dave"),
    ("Carol", "Eve"),
]

G.add_edges_from(friendships)

# Find the shortest path between two individuals
source_person = "Alice"
target_person = "Eve"

try:
    shortest_path = nx.shortest_path(G, source=source_person, target=target_person)
    print(f"The shortest path between {source_person} and {target_person} is: {shortest_path}")
except nx.NetworkXNoPath:
    print(f"There is no path between {source_person} and {target_person} in the network.")

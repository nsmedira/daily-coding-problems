class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

root = Node('a')
root.left = Node('b')
root.right = Node('c')
root.left.left = Node ('d')

def PrintTree(root):
    if root.left:
        PrintTree(root.left)
    print( root.data),
    if root.right:
        PrintTree(root.right)

PrintTree(root)
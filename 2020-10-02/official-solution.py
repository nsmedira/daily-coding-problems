def deepest(node):

    print('we just started the \'deepest\' function. node.data = ' + node.data)

    if node and not node.left and not node.right:

        print('we reached a node with no children')

        return (node, 1) # Leaf and its depth

    if not node.left: # Then the deepest node is on the right subtree

        print('the deepest node is on the right subtree')

        return increment_depth(deepest(node.right))
        
    elif not node.right: # Then the deepest node is on the left subtree

        print('the deepest node is on the left subtree')

        return increment_depth(deepest(node.left))

    return increment_depth(
            max(deepest(node.left), deepest(node.right),
                    key=lambda x: x[1])) # Pick higher depth tuple and then increment its depth

def increment_depth(node_depth_tuple):
    node, depth = node_depth_tuple

    print('node.data: ' + node.data)
    print('depth: ' + str(depth))
    
    return (node, depth + 1)

class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

root = Node('a')
root.left = Node('b')
root.right = Node('c')
root.left.left = Node ('d')

print(deepest(root))
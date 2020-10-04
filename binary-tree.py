# Python Binary Tree https://www.tutorialspoint.com/python_data_structure/python_binary_tree.htm

class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

    def PrintTree(self):
        if self.left:
            self.left.PrintTree()
        print( self.data),
        if self.right:
            self.right.PrintTree()
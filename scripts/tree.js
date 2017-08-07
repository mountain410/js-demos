//所有树结构的操作

// 顺序存储结构
(function () {
    // 顺序存储结构的遍历
    var tree = [1, 2, 3, 4, 5, , 6, , , 7];

    console.log('preOrder:');
    void function preOrderTraverse(x, visit) {
        visit(tree[x]);
        if (tree[2 * x + 1]) preOrderTraverse(2 * x + 1, visit);
        if (tree[2 * x + 2]) preOrderTraverse(2 * x + 2, visit);
    }(0, function (value) {
        console.log(value);
    });

    console.log('inOrder:');
    void function inOrderTraverse(x, visit) {
        if (tree[2 * x + 1]) inOrderTraverse(2 * x + 1, visit);
        visit(tree[x]);
        if (tree[2 * x + 2]) inOrderTraverse(2 * x + 2, visit);
    }(0, function (value) {
        console.log(value);
    });

    console.log('postOrder:');
    void function postOrderTraverse(x, visit) {
        if (tree[2 * x + 1]) postOrderTraverse(2 * x + 1, visit);
        if (tree[2 * x + 2]) postOrderTraverse(2 * x + 2, visit);
        visit(tree[x]);
    }(0, function (value) {
        console.log(value);
    });
}());

var Stack = require('../Stack/stack');
var Queue = require('../Queue/Queue').Queue;

// 链式存储结构
function BinaryTree(data, leftChild, rightChild) {
    this.data = data || null;
    // 左右孩子结点
    this.leftChild = leftChild || null;
    this.rightChild = rightChild || null;
}
exports.BinaryTree = BinaryTree;
BinaryTree.prototype = {
    constructor: BinaryTree,
    // 判断两棵树是否相似
    isSimilar: function isSimilar(tree) {
        return tree &&
            this.leftChild && isSimilar.call(this.leftChild, tree.leftChild) &&
            this.rightChild && isSimilar.call(this.rightChild, tree.rightChild);
    },
    createBinaryTree: function (tree) {
        void function preOrderTraverse(node, x, visit) {
            visit(node, tree[x]);

            if (tree[2 * x + 1]) preOrderTraverse(node.leftChild = new BinaryTree(), 2 * x + 1, visit);
            if (tree[2 * x + 2]) preOrderTraverse(node.rightChild = new BinaryTree(), 2 * x + 2, visit);
        }(this, 0, function (node, value) {
            node.data = value;
        });
    },

    // 先序遍历二叉树的非递归算法
    preOrder_stack: function (visit) {
        var stack = new Stack();
        stack.push(this);

        while (stack.top) {
            var p;
            // 向左走到尽头
            while ((p = stack.peek())) {
                p.data && visit(p.data);
                stack.push(p.leftChild);
            }

            stack.pop();

            if (stack.top) {
                p = stack.pop();
                stack.push(p.rightChild);
            }
        }
    },
    preOrder_stack2: function (visit) {
        var stack = new Stack();
        var p = this;

        while (p || stack.top) {
            if (p) {
                stack.push(p);
                p.data && visit(p.data);
                p = p.leftChild;
            } else {
                p = stack.pop();
                p = p.rightChild;
            }
        }
    },
    inOrder_stack1: function (visit) {
        var stack = new Stack();
        stack.push(this);

        while (stack.top) {
            var p;
            // 向左走到尽头
            while ((p = stack.peek())) {
                stack.push(p.leftChild);
            }

            stack.pop();

            if (stack.top) {
                p = stack.pop();
                p.data && visit(p.data);
                stack.push(p.rightChild);
            }
        }
    },
    inOrder_stack2: function (visit) {
        var stack = new Stack();
        var p = this;

        while (p || stack.top) {
            if (p) {
                stack.push(p);
                p = p.leftChild;
            } else {
                p = stack.pop();
                p.data && visit(p.data);
                p = p.rightChild;
            }
        }
    },
    // 为了区分两次过栈的不同处理方式，在堆栈中增加一个mark域，
    // mark=0表示刚刚访问此结点，mark=1表示左子树处理结束返回，
    // mark=2表示右子树处理结束返回。每次根据栈顶的mark域决定做何动作
    postOrder_stack: function (visit) {
        var stack = new Stack();
        stack.push([this, 0]);

        while (stack.top) {
            var a = stack.pop();
            var node = a[0];

            switch (a[1]) {
                case 0:
                    stack.push([node, 1]);  // 修改mark域
                    if (node.leftChild) stack.push([node.leftChild, 0]);  // 访问左子树
                    break;
                case 1:
                    stack.push([node, 2]);
                    if (node.rightChild) stack.push([node.rightChild, 0]);
                    break;
                case 2:
                    node.data && visit(node.data);
                    break;
                default:
                    break;
            }
        }
    },

    preOrderTraverse: function preOrderTraverse(visit) {
        visit(this.data);
        if (this.leftChild) preOrderTraverse.call(this.leftChild, visit);
        if (this.rightChild) preOrderTraverse.call(this.rightChild, visit);
    },
    inPrderTraverse: function inPrderTraverse(visit) {
        if (this.leftChild) inPrderTraverse.call(this.leftChild, visit);
        visit(this.data);
        if (this.rightChild) inPrderTraverse.call(this.rightChild, visit);
    },
    postOrderTraverse: function postOrderTraverse(visit) {
        if (this.leftChild) postOrderTraverse.call(this.leftChild, visit);
        if (this.rightChild) postOrderTraverse.call(this.rightChild, visit);
        visit(this.data);
    },

    levelOrderTraverse: function (visit) {
        var queue = new Queue();
        queue.enQueue(this);

        while (queue.rear) {
            var p = queue.deQueue();
            p.data && visit(p.data);
            p.leftChild && queue.enQueue(p.leftChild);
            p.rightChild && queue.enQueue(p.rightChild);
        }
    },
    // 求先序序列为k的结点的值
    getPreSequence: function (k) {
        var count = 0;

        void function recurse(node) {
            if (node) {
                if (++count === k) {
                    console.log('Value is: ' + node.data);
                } else {
                    recurse(node.leftChild);
                    recurse(node.rightChild);
                }
            }
        }(this);
    },
    // 求二叉树中叶子结点的数目
    countLeaves: function () {
        return function recurse(node) {
            if (!node) return 0;
            else if (!node.leftChild && !node.rightChild) return 1;
            else return recurse(node.leftChild) + recurse(node.rightChild);
        }(this);
    },
    // 交换所有结点的左右子树
    revoluteBinaryTree: function revoluteBinaryTree() {
        var temp = this.leftChild;
        this.leftChild = this.rightChild;
        this.rightChild = temp;

        if (this.leftChild) revoluteBinaryTree.call(this.leftChild);
        if (this.rightChild) revoluteBinaryTree.call(this.rightChild);
    },
    // 求二叉树中以值为x的结点为根的子树深度
    getSubDepth: function getSubDepth(x) {
        if (this.data === x) {
            console.log('subDepth: ' + this.getDepth());
        } else {
            if (this.leftChild) getSubDepth.call(this.leftChild, x);
            if (this.rightChild) getSubDepth.call(this.rightChild, x);
        }
    },
    getDepth: function getDepth() {
        if (this === global) return 0;
        else {
            var m = getDepth.call(this.leftChild);
            var n = getDepth.call(this.rightChild);
            return (m > n ? m : n) + 1;
        }
    },
    // 删除所有以元素x为根的子树
    delSubX: function delSubX(x) {
        if (this.data === x) {
            this.leftChild = null;
            this.rightChild = null;
        } else {
            if (this.leftChild) delSubX.call(this.leftChild);
            if (this.rightChild) delSubX.call(this.rightChild);
        }
    },
    // 非递归复制二叉树
    copyBinaryTree_stack: function () {
        // 用来存放本体结点的栈
        var stack1 = new Stack();
        // 用来存放新二叉树结点的栈
        var stack2 = new Stack();
        stack1.push(this);
        var newTree = new BinaryTree();
        var q = newTree;
        stack2.push(newTree);
        var p;

        while (stack1.top) {
            // 向左走到尽头
            while ((p = stack1.peek())) {
                if (p.leftChild) q.leftChild = new BinaryTree();
                q = q.leftChild;
                stack1.push(p.leftChild);
                stack2.push(q);
            }

            p = stack1.pop();
            q = stack2.pop();

            if (stack1.top) {
                p = stack1.pop();
                q = stack2.pop();
                if (p.rightChild) q.rightChild = new BinaryTree();
                q.data = p.data;
                q = q.rightChild;
                stack1.push(p.rightChild);  // 向右一步
                stack2.push(q);
            }
        }

        return newTree;
    },
    // 求二叉树中结点p和q的最近祖先
    findNearAncient: function (pNode, qNode) {
        var pathP = [];
        var pathQ = [];
        findPath(this, pNode, pathP, 0);
        findPath(this, qNode, pathQ, 0);

        for (var i = 0; pathP[i] == pathQ[i] && pathP[i]; i++);
        return pathP[--i];
    },
    toString: function () {
    },
    // 求一棵二叉树的繁茂度
    lushDegree: function () {
        var countArr = [];
        var queue = new Queue();
        queue.enQueue({
            node: this,
            layer: 0
        });
        // 利用层序遍历来统计各层的结点数
        var r;
        while (queue.rear) {
            r = queue.deQueue();
            countArr[r.layer] = (countArr[r.layer] || 0) + 1;

            if (r.node.leftChild)
                queue.enQueue({
                    node: r.node.leftChild,
                    layer: r.layer + 1
                });
            if (r.node.rightChild)
                queue.enQueue({
                    node: r.node.rightChild,
                    layer: r.layer + 1
                });
        }

        // 最后一个队列元素所在层就是树的高度
        var height = r.layer;
        for (var max = countArr[0], i = 1; countArr[i]; i++)
            // 求层最大结点数
            if (countArr[i] > max) max = countArr[i];

        return height * max;
    },
    // 求深度等于书的高度减一的最靠左的结点
    printPath_maxDepthS1: function () {
        var maxh = this.getDepth();
        var path = [];

        if (maxh < 2) return false;
        find_h(this, 1);

        function find_h(tree, h) {
            path[h] = tree;

            if (h == maxh - 1) {
                var s = ' ';
                for (var i = 1; path[i]; i++) s += path[i].data + (path[i + 1] ? ' -> ' : '');
                console.log(s);
                return;
            } else {
                if (tree.leftChild) find_h(tree.leftChild, h + 1);
                if (tree.rightChild) find_h(tree.rightChild, h + 1);
            }

            path[h] = null;
        }
    },
    // 求树结点的子孙总数填入descNum域中，并返回
    descNum: function () {
        return  function recurse(node) {
            var d;
            if (!node) return -1;
            else d = recurse(node.leftChild) + recurse(node.rightChild) + 2;

            node.descNum = d;

            return d;
        }(this);
    }
};

// 判断二叉树是否完全二叉树
BinaryTree.isFullBinaryTree = function (tree) {
    var queue = new Queue();
    var flag = 0;
    queue.enQueue(tree);

    while (queue.rear) {
        var p = queue.deQueue();

        if (!p) flag = 1;
        else if (flag) return false;
        else {
            queue.enQueue(p.leftChild);
            queue.enQueue(p.rightChild);
        }
    }

    return true;
};

// 求从tree到node结点路径的递归算法
function findPath(tree, node, path, i) {
    var found = false;

    void function recurse(tree, i) {
        if (tree == node) {
            found = true;
            return;
        }

        path[i] = tree;
        if (tree.leftChild) recurse(tree.leftChild, i + 1);
        if (tree.rightChild && !found) recurse(tree.rightChild, i + 1);
        if (!found) path[i] = null;
    }(tree, i);
}


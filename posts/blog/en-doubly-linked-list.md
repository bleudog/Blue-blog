---
title: 'Doubly Linked List'
posttitle: 'Linked List'
postsubtitle: 'Part 03: Doubly Linked List'
date: '2022-07-31 17:50:00'
updated: '2022-10-24 06:00:00'
tags:
  - linked list
lang: en
about: ds
---

# What is a Doubly Linked List?

A **doubly linked list** is a linear collection of data elements in which the order of the element is determined not by its physical address in the memory, but by references (or links) each element points to.

![Doubly Linked List](/images/posts/linked-list/doubly-linked-list.svg)

The structure of the element or a node in a doubly linked list consists of a data and two references: `previous` and `next`. Having two references -- `preivous` and `next` allows for simpler insertion and removal of elements in any position in the list. Also we can easily traverse the list in reverse order.

Drawback of using doubly linked list is that it consumes more memory because of the extra information in the node.

## Complexity

| Space | Access | Search | Insertion | Deletion |
| :---: | :----: | :----: | :-------: | :------: |
| O(n)  |  O(n)  |  O(n)  |   O(1)    |   O(n)   |

## Pseudocode of Basic Operations

### prepend

```text
prepend(head, tail, value) → void
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n      ← Node(value)
    n.next ← head

    IF head != Ø
        head.prev ← n
    END IF

    IF tail == Ø
        tail ← n
    END IF

    head ← n
END prepend
```

### append

```text
append(head, tail, value) → void
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to insert in the list
    Post: a new node has been inserted at the end of the list

    n      ← Node(value)
    n.prev ← tail

    IF tail != Ø
        tail.next ← n
    END IF
    tail ← n

    IF head == Ø
        head ← n
    END IF
END append
```

### deleteHead

```text
deleteHead(head, tail, del) → Node
    Pre: head is the first node in the list
         tail is the last node in the list
         del stores a node to be deleted
    Post: head has been replaced

    del ← Ø

    IF head == tail
        del  ← head
        head ← Ø
        tail ← Ø
    ELSE IF head != Ø
        del       ← head
        head      ← head.next
        head.prev ← Ø
    END IF

    RETURN del
END
```

### deleteTail

```text
deleteTail(head, tail, del) → Node
    Pre: head is the first node in the list
         tail is the last node in the list
         del stores a node to be deleted
    Post: tail has been replaced

        del ← Ø

    IF tail == head
        del  ← tail
        head ← Ø
        tail ← Ø
    ELSIF tail != Ø
        del       ← head
        tail      ← tail.prev
        tail.next ← Ø
    END IF

    RETURN del
END
```

### delete

```text
delete(head, tail, value) → Node | Ø
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to remove from the list
    Post: a node is removed from the list and returned; otherwise, return Ø

    // FIND returns the node with a given value or Ø
    deletedNode ← call FIND(value)

    IF deletedNode
        IF deletedNode.prev AND deletedNode.next
            deletedNode.prev.next ← deletedNode.next;
            deletedNode.next.prev ← deletedNode.prev;
            RETURN deletedNode;
        ELSIF deletedNode == head && deletedNode == tail
            head ← Ø
            tail ← Ø
        ELSIF deletedNode == head
            head       ← head.next
            head?.prev ← Ø
        ELSIF deletedNode == tail
            tail       ← tail.prev
            tail?.next ← Ø
        END IF
    END IF

    RETURN deletedNode
END delete
```

### Reverse Traversal

```text
reverseTraversal(tail)
    Pre: tail points to the last node in the list
    Post: a list has been traversed in reverse order

    n ← tail
    WHILE n != Ø
        print n.value
        n ← n.prev
    END WHILE
END reverseTraversal
```

---

[Full implementation of Doubly Linked List TypeScript](https://github.com/rolemadelen/typescript-algorithms/tree/main/src/data-structures/doubly-linked-list)

---
title: 'Singly Linked List'
posttitle: 'Linked List'
postsubtitle: 'Part 02: Singly Linked List'
date: '2022-07-31 15:50:00'
updated: '2022-10-22 12:00:00'
tags:
  - linked list
lang: en
about: ds
---

A **singly linked list** is a linear collection of data elements. The order of the element is not given by their physical location in memory. Instead, each element points to the next node using the address.

![Singly Linked List](/images/posts/linked-list/singly-linked-list.svg)

The simplest form of the element in a linked list called node, composes of data and a reference to the next link. This structure allows for efficient insertion and removal of elements from any position in the linked list. A drawback of linked lists is that access time is linear.

## Complexity

| Space | Access | Search | Insertion | Deletion |
| :---: | :----: | :----: | :-------: | :------: |
| O(n)  |  O(n)  |  O(n)  |   O(1)    |   O(1)   |

## Pseudocode for Basic Operations

### Access

```text
getNode(head, i) → Node | Ø
    Pre: head is the 1st node in the list
         i is a 1-based index of the node in the list we're trying to get
    Post: ith node is returned from the list

    curr ← head
    i    ← 1

    WHILE i < pos
      curr ← curr.next
    END WHILE

    RETURN current
END getNode
```

### Search

```text
def search(head, value) → Node | Ø
    Pre: head is the 1st node in the list
         value is the value to search for
    Post: returns a node with the value; othewrise return Ø (null)

    current ← head

    WHILE current
        IF current.value == value
            RETURN current
        END IF

        current ← current.next
    END WHILE

    RETURN Ø
END search
```

### prepend

```text
prepend(head, value) → void
    Pre: head is the 1st node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n ← Node(value)

    IF this.head == Ø
        this.head ← n
    ELSE
        n.next ← head
        head   ← n
    END IF
end prepend
```

### append

```text
append(head, value)
    Pre: head is the 1st node in the list
         value is the value we're going to insert in the list
    Post: a new node has been inserted at the end of the list

    n ← Node(value)

    IF this.head == Ø
        this.head ← n
    ELSE
        current ← this.head
        WHILE current.next
            current ← current.next
        END

        current.next ← n
    END IF
END append
```

### delete

```text
delete(head, value) → Node | Ø
    Pre: head is the 1st node in the list
         value is the value we're going to remove from the list
    Post: a node has been removed from the list and returned; otherwise, return Ø (null)

    IF head == Ø
        RETURN Ø
    ELSIF head == value
        deletedNode ← head
        head        ← head.next
        RETURN deletedNode
    END

    current ← head
    WHILE current.next
        IF current.next.value == value
            deletedNode  ← current.next
            current.next ← current.next.next
            return deletedNode
        END
    END

    return Ø
END delete
```

---

Full implementation of Singly Linked List can be found [here](https://github.com/rolemadelen/DataStructures-and-Algorithms/blob/main/src/data-structures/linked-list/LinkedList.ts).

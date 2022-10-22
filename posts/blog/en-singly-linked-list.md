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

## Pseudo-code

### Access (get Nth node)

```rb
# position -> 1-based index (1,2,3,...)

def getNthNode(position)
    current = this.head

    for i=1 and i < position
        current = current.next
    end

    return current
end
```

### Search

```rb
def search(value)
    current = this.head

    while current.next != nil
        if current.value === value
            return true
        end

        current = current.next
    end

    return false
end
```

### prepend

A function to insert a node in the beginning of the list.

```rb
def prepend(value)
    newNode = new Node(value)

    if this.head == nil
        this.head = newNode
    else
        newNode.next = this.head
        this.head = newNode
    end
end
```

### append

A function to insert a node at the end of the list.

```rb
def append(value)
    newNode = new Node(value)

    if this.head == nil
        this.head = newNode
    else
        current = this.head
        while current.next != nil
            current = current.next
        end

        current.next = newNode
    end
end
```

### delete

```rb
def delete(value)
    if this.head == nil
        return nil
    end

    current = this.head
    while current.next != nil
        if current.next.value == value
            deletedNode = current.next
            current.next = current.next.next
            return deletedNode
        end
    end

    return nil
end
```

## Time Complexity

- Access: **O(N)**
- Search: **O(N)**
- Insertion: **O(1)**
- Deletion: **O(1)**

## Space Complexity

**O(n)**

---

- [Singly Linked List Implementation in TypeScript](https://github.com/rolemadelen/DataStructures-and-Algorithms/blob/main/src/data-structures/linked-list/LinkedList.ts)

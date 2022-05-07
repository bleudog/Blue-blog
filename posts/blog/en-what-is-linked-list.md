---
title: "What is a Linked List"
date: "2022-05-07 23:17:17"
tags: 
  - data structure
  - linked list
lang: en
---

## TL;DR
- Linked lists are sequence of nodes connected via pointers.
- A node contains a key and pointers to reference other nodes.
- Linked lists are fast at inserting and deleting items -> O(1),
- but slow at finding the particular node -> O(n).
- Reallocation is not needed because a list can keep grow until memory runs out.
- Use a dummy node (sentinel) to represent the empty list.

---

## Linked Lists
Linked List is a linear data structure similar to an array but elements are not stored contiguously in memory. Linked lists are sequence of nodes connected via pointers.

![Linked List Example](/images/posts/what-is-linked-list/linkedlist-example.png)

### Nodes
Nodes are like elementns in an array. A node contains a data and a reference to other nodes in the memory.

![Node Example](/images/posts/what-is-linked-list/nodes.png)

## Why use linked lists?
Linked lists are useful for inserting and deleting items ([is it?](https://www.youtube.com/watch?v=YQs6IC-vgmo)).

When we insert a new item in an abritrary location in the array, we first need to shift every elements to make a space for the data.

```rb
# pseudocode
def insert(position, data) 
  for array.size to position do |i|
    array[i] = array[i-1]
  end
  array[position] = data
  array.size += 1
end
```

This is quite slow and expensive. Same goes with the deletion.

```rb
# pseudocode
def delete(position) 
  for position to array.size-1 do |i|
    array[i] = array[i+1]
  end
  array.size -= 1
end
```

We need to shift every elements to fill in the gap in between elements.

### Advantages of Linked Lists
With a linked list, we can insert or delete items in constant time *if* we know the reference to the previous node.

```rb
# pseudocode
def insert(position, data)
  # find the previous node
  prevNode = getNode(position-1)

  # insert a new node
  newNode = new Node(data)
  newNode.next = prevNode.next
  prevNode.next = newNode

  array.size += 1
end
```

We need to know the node before one we're trying to delete. I used `getNode(index)` to get the previous node.
Then, all we need to do is re-wire those pointers.

![Linked Lists Deletion Example](/images/posts/what-is-linked-list/insert-node.png)

Deletion is even simpler.

```rb
# pseudocode
def delete(position) 
  # find the previous node
  prevNode = getNode(position-1)

  # delete the node
  prevNode.next = prevNode.next.next

  array.size -= 1
end
```

Let the previous node skip the node we're trying to delete and reconnect.
![Linked Lists Deletion Example](/images/posts/what-is-linked-list/delete-node.png)

### Disadvantages of Linked Lists

One downside of linked list is that it takes linear time to find a node in the list. Arrays can do this in constant time because it allows random access. e.g) `array[5]`

In order to access `n`th node, we need to traverse from the very beginning.

```rb
# pseudocode
def getNode(index) 
  curr = head

  index.times do |i|
    curr = curr.next
  end

  return curr
end
```

## How to represent an empty list?

An empty array is represented as `[]`. What about an empty linked list? should it be a `NULL`?

Setting it to a `null` seems valid option but there's a potential of causing a runtime error:

```rb
list = new LinkedList

# do stuff
# do some other stuffs
# removed every node, so list is NULL

list.insert(index, data) # runtime error
```

The compiler will complain when a method is called on null object. To prevent this, we can use a *sentinel* node to represent the empty list.

![Empty List Example](/images/posts/what-is-linked-list/empty-list.png)

A sentinel is a special node that does not represent an item. Essentially, it's a dummy node and it will always exist in the list even when the list is empty.


## Reference
- [https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0](https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0)
- [https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w](https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0)
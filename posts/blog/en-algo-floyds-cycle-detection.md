---
title: "Floyd's Cycle Detection Algorithm"
date: "2022-07-30 15:00:00"
tags: 
  - linked list 
  - tortoise and hare
  - floyds
lang: en
about: algo
---


We can detect a cycle in a linked list using the Floyd's cycle detection or Tortoise-Hare algorithm.

We're going to use two pointers and each node will iterate through the list at a different pace. 
One node(`tortoise`), will visit every node and move one step at a time. 
On the other hand, the second node(`hare`), will move twice faster than the `tortoise` node. 
That is, it will move 2 steps at a time.

If there is no cycle in the list, either `tortoise` or `hare` will be at `NULL` and we know there is no cycle. 
Otherwise, two nodes will meet eventually and we can safely conclude that there is a cycle and return `true`.

![Tortoise and Hare Example](/images/posts/tortoise-and-hare/tortoise-and-hare.png)

Here's a pseudocode:
```text
has_cycle(Node head) {
  Node tortoise = head
  Node hare = head

  while tortoise != hare {
    tortoise = tortoise->next
    hare = hare->next->next

    return false if (tortoise == NULL) OR (hare == NULL)
  }

  return true
}
```

---

## Implementation

Ruby Implementation:
```rb
def hasCycle(head)
    tortoise = head
    hare = head
    
    while hare and hare.next
        tortoise = tortoise.next
        hare = hare.next
        return false if !hare
        hare = hare.next
        
        return true if tortoise == hare
    end
    
    return false
end
```

C++ Implementation:
```cpp
bool hasCycle(ListNode *head) {
    auto tortoise = head;
    auto hare = head;
    
    while(hare && hare->next) {
        tortoise = tortoise->next;
        hare = hare->next;
        if(!hare) return false;
        hare = hare->next;
        if(tortoise == hare) return true;
    }
    
    return false;
}
```

---

See also:
- [Find the starting point of a cycle](./algo-find-start-of-a-cycle)

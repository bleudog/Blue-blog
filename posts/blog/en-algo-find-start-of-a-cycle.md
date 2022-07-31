---
title: "Find the starting point of a cycle"
date: "2022-07-30 16:00:00"
tags: 
  - linked list
  - floyds
  - tortoise and hare
lang: en
about: algo
---

There are two things we need to consider:
1. is there a cycle?
2. if there is a cycle, where does it begin?

I covered the algorithm about [detecting a cycle](./algorithm-floyds-cycle-detection) in the previous post, but here's TL,DR; 😛:
```rb
def detectCycle(head)
    tortoise = head
    hare = head

    while hare and hare.next
        tortoise = tortoise.next
        hare = hare.next
        return nil if !hare.next 
        hare = hare.next
        
        return true if hare == tortoise
    end
            
    false
end
```

Now that we can determine if there is a cycle in the list or not, we need to figure out how to find the starting point of a cycle.

Once the cycle is found, we need to do 2 things:
1. move the `tortoise` to the head
2. move both `tortoise` and `hare` nodes one step at a time until they meet.

The node where they meet again, is the starting position of a cycle.

![Floyd's Figure](/images/posts/tortoise-and-hare/floyds.png)

## Implementation
```rb
def detectCycle(head)
    tortoise = head
    hare = head

    while hare and hare.next
        tortoise = tortoise.next
        hare = hare.next
        return nil if !hare.next 
        hare = hare.next
        
        if hare == tortoise
            tortoise = head
            
            while tortoise != hare
                tortoise = tortoise.next
                hare = hare.next
            end
            
            # returning the node
            return hare
        end
    end
         
    # there is no cycle
    nil
end
```

---

See also:
- [Floyd's Cycle Detection Algorithm](./algo-floyds-cycle-detection)

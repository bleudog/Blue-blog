---
title: '🌗 Toy Project: Yoruasa pt.1'
posttitle: 'Yoruasa'
postsubtitle: '🌗 Reflection Part 01'
date: '2022-09-19 22:00:00'
tags:
  - side-project
lang: en
about: log
---

Yoruasa (夜朝) is a bedtime and wake up time tracking project. I've been tracking my
hours in my personal diary and thought it'd be fun to make a project out of it.

Here's a draft of Yoruasa project.
![draft](/images/posts/yoruasa/initial-idea.jpg)

You're genius if you understand what's happening here 😛

Anyway, so here's the basic layout that I'm thinking of based on that doodle.

![draw-io](/images/posts/yoruasa/layout.jpeg)

I'm still thinking about the design, so please.. 🙃

---

I implemented the `Record` button.

![progress](/images/posts/yoruasa/yoruasa-1.gif)

(I sholud think about creating a codepen account rather than pasting code here..🤔)

`Record` JSX:

```jsx
class Record extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="newRecord">
          <button>
            <span></span>
            <span></span>
          </button>
        </div>
      </React.StrictMode>
    );
  }
}

export default Record;
```

CSS:

```css
.newRecord > button {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 5px;

  color: white;
  text-shadow: 1px 1px #c2c2c2;

  border-radius: 10px;
  border: none;
  background-color: #f2f2f2;

  box-shadow: 0 0 5px 0 #ccc;
  transition: all 0.2s ease-in-out;
}

.newRecord > button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 45px;
  height: 12px;
  background-color: #dadada;

  border-radius: 5px;

  transition: all 0.2s ease-in-out;
}

.newRecord > button span:last-child {
  transform: translate(-50%, -50%) rotate(90deg);
}

.newRecord > button:hover {
  transform: scale(0.96);
  /* box-shadow: inset 0 0 5px 0px #bcbcbc; */
  border: none;
  transition: all 0.2s ease-in-out;
}

.newRecord > button:hover span {
  background-color: #c2c2c2;
  transition: all 0.2s ease-in-out;
}

.newRecord > button:active {
  box-shadow: 0 0 5px 0 #c1d3ff;
  background-color: #fff;
  transform: scale(0.93);
}

.newRecord > button:active span {
  background-color: #78b9ff;
  transition: all 0.2s ease-in-out;
}
```

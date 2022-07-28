# Browser History

Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

Write pseudo-code for this.

```JS
const Stack = require('./stack')

class BrowserHistory(){
  constructor(){
    this.history = new Stack();
    this.backwards = [];
    this.size = 0;
  }
  add(page){
    this.history.push(page)
  }
  back(){
    let backPage = this.history.pop();
    this.backwards.push(backPage)
    return backPage;
  }
  forward(){
    let forwardPage = this.backwards.pop();
    return this.add(forwardPage);
  }
}

module.exports = BrowserHistory;


```

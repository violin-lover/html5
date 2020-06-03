const fib = {
  sequence: [0, 1],
  nextNum() {
    let answer = "" + this.sequence[this.sequence.length - 1] + " + " + this.sequence[this.sequence.length - 2] + " = " + (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2])
    return answer
  },
  next() {
    return (this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2]);
  },
  prev() {
    return (this.sequence[1] - this.sequence[0])
  },
  grow() {
    this.sequence.push(this.next())
  },
  shrink() {
    if (this.sequence.length > 2) {
      this.sequence.pop()
    }
  },
  growDown() {
    this.sequence.unshift(this.prev())
  },
  shrinkUp() {
    if (this.sequence.length > 2) {
      this.sequence.shift()
    }
  },
  goldenRatio() {
  if(this.sequence.length > 2){
    return this.sequence[this.sequence.length-1] / this.sequence[this.sequence.length-2]
    }  
  }
}





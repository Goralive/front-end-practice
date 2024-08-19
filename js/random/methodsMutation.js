const author = {
  name: 'Simon Garfunkle',
  numReviews: 8,
  submitReview() {
    return this.numReviews++
  }
}

console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)

console.log(`${author.name} is submitting a review...`)
author.submitReview()
console.log(`${author.name} has submitted ${author.numReviews} reviews`)


const setupTags = (articles) => {
  const allTags = {}

  articles.forEach(article => {
    article.articleTags.tags.forEach(tag => {
      console.log(tag)
      //if there is already a tag in the array add 1 to count else if not there add 1
      if(allTags[tag]){
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
    // console.log(allTags)
  })

  const newTags = Object.entries(allTags).sort((a,b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  
  return newTags
}

export default setupTags
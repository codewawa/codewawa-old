/*
In this file is stored all tutorials details

To add new tutorial:
1. Insert it in tutorials subdirectory
2. Create create new object in array placed below, like in example
  (Object must have keys: title, author, image, component)
*/
import AtomBasics from './tutorials/AtomBasics'
import GitOverview from './tutorials/GitOverview'
export default  [
  // {
  //   title: "Introduction to JavaScript",
  //   author: "Michał Oręziak",
  //   image: <image>,
  //   component: {}
  // }
  AtomBasics,
  GitOverview
]

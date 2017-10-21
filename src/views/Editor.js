import React, { Component } from 'react'
import './Editor.css'

class EditorRow extends Component {
  render () {
    return (
      <li className="editorRow">
        <label className="checkbox">
          <input type="checkbox"/>
        </label>
        <div className="select">
          <select>
            <option>Front</option>
            <option>Near-Front</option>
            <option>Central</option>
            <option>Near-Back</option>
            <option>Back</option>
          </select>
        </div>
        <div className="select">
          <select>
            <option>close</option>
            <option>near-close</option>
            <option>close-mid</option>
            <option>mid</option>
            <option>open-mid</option>
            <option>near-open</option>
            <option>open</option>
          </select>
        </div>
        <div className="select">
          <select>
            <option>rounded</option>
            <option>unrounded</option>
          </select>
        </div>
        <input className="input vowel-name" type="text" placeholder="i"/>
      </li>
    )
  }
}

class Editor extends Component {
  render () {
    let editorRows = [0, 1, 2, 3, 4].map(() => {
      return (<EditorRow />)
    })

    return (
      <section>
        <ul>
          {editorRows}
        </ul>
      </section>
    )
  }
}

export default Editor

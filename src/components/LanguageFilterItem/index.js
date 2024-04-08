import React from 'react'
import './index.css'

const LanguageFilterItem = (props) => {
    const {languageFilterDetails , isActive , setActiveLanguageFilterId} = props
    const {id , language} = languageFilterDetails
    const btnClassName = isActive ? "language-btn active" : "language-btn";
    const onClickTab = ()=>{
        setActiveLanguageFilterId(id)
    }
  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickTab}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

import React, { useContext, useEffect, useState } from "react"
import ComplexButtons from "./complexButtons"
import { LanguageContext } from "./layout"
import { HeaderHeightContext } from "./layout"

export default function IndexPageContent() {
  const { actLanguage } = useContext(LanguageContext)
  const { headerHeight } = useContext(HeaderHeightContext)

  return (
    <div style={{ marginTop: headerHeight, padding: 0 }}>
      <ComplexButtons />
    </div>
  )
}

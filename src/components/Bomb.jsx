import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

library.add(faBomb)

const Star = () => {
    return <FontAwesomeIcon shake icon="fa-solid fa-bomb fa-shake" size="3x" />
}

export default Star

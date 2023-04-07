import React from 'react'

export function Links(props) {
  return (
    <>
      <li key={props.id}>
        <a href={props.url} rel='noreferrer noopener' target='_blank'>
          {props.title}
        </a>
      </li>
    </>
  )
}

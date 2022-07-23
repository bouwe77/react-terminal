import { Fragment } from 'react'

const Help = ({ commands }) => (
  <>
    <br />
    The following commands are available:
    <br />
    {commands
      .filter((command) => command.help)
      .map((command, index) => {
        return (
          <Fragment key={index}>
            <br />
            <b>{command.help.example}</b>
            <br />
            &nbsp;&nbsp;&nbsp;{command.help.description}
            <br />
          </Fragment>
        )
      })}
    <br />
  </>
)

export default Help

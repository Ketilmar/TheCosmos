import styled from 'styled-components'

const PageHeader = ({ className, title, description }) => (
  <StyledHeader className={className}>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </StyledHeader>
)

const StyledHeader = styled.header`
  margin-block: 2em 1em;

  h1,
  p {
    margin: 0;
  }

  p {
    margin-block-start: .8em;
  }

  @media (min-width: 48em) {
    margin-block: 6em 4em;
    }
`

export default PageHeader
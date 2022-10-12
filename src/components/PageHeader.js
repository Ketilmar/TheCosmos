import styled from 'styled-components'

const PageHeader = ({ className, title, description, children }) => (
  <StyledHeader className={className}>
    {title && <h1>{title}</h1>}
    {description && <p>{description}</p>}
    {children}
  </StyledHeader>
)

const StyledHeader = styled.header`
  margin-block: 2em;

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin-block-start: .8em;
  }

  @media (min-width: 48em) {
    margin-block: 6em 4em;

    h1 {
      font-size: 4rem;
    }
  }
`

export default PageHeader
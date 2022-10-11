import styled from 'styled-components'

const PageHeader = ({ className, title, description }) => (
  <StyledHeader className={className}>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </StyledHeader>
)

const StyledHeader = styled.header`
  h1,
  p {
    margin: 0;
  }

  p {
    margin-block-start: .8em;
  }
`

export default PageHeader
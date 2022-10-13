import PageHeader from "../../components/PageHeader/PageHeader";

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSubmitButton
} from "./StyledContact";

const ContactPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Form may or may not have been submitted :)");

    e.target.reset();
  }

  return (
    <>
      <PageHeader title="Contact" />
      <section>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledLabel>
            Name:
            <StyledInput type="text "name="name" required />
          </StyledLabel>

          <StyledLabel>
            E-mail:
            <StyledInput type="email" name="email" required />
          </StyledLabel>

          <StyledLabel>
            Message:
            <StyledTextArea name="message" required />
          </StyledLabel>

          <StyledSubmitButton type="submit" value="Send" />
        </StyledForm>
      </section>
    </>
  );
}

export default ContactPage;
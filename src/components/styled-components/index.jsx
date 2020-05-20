import styled from 'styled-components';

export const PageHeading = styled.h2`
  font-size: 4rem;
  /* padding: 1rem 0 1rem 2rem; */
  font-family: $font-heading;
  font-weight: 400;
`;
export const PageHeadingWithLines = styled.h2`
  text-align: center;
  display: grid;
  grid-template-columns: 10% minmax(min-content, max-content) 10%;
  align-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  font-size: 4rem;
  font-weight: 400;

  &:before,
  &:after {
    content: '';
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.7;
`;
export const Button = styled.button`
  background-color: #ffa45c;
  color: white;
  padding: 1.3rem;
  border: 0;
  width: 100%;
`;

export const InputField = styled.input`
  border: 1px solid currentColor;
  color: var(--border-color-light-grey);
  height: 4rem;
  width: 50rem;
  font-weight: 200;
  display: block;
`;
export const TextArea = styled.textarea`
  border: 1px solid currentColor;
  color: var(--border-color-light-grey);
  height: 10rem;
  width: 50rem;
  font-weight: 200;
  display: block;
`;

import styled from 'styled-components'

export const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  .heading-link {
    margin-top: 1rem;
    .doc-link {
      color: #fff;
      text-decoration: none;
    }

    .github-link {
      color: #425A70;
      text-decoration: none;
    }
  }
  .system-info {
    width: 400px;
    margin-top: 1rem;
    text-align: left;
    max-height: 400px;
    overflow-y: scroll;
    &:focus {
      outline: none
    }

    summary {
      &:focus {
        outline: none;
      }
      cursor: pointer;
      color: #2c3e50;
      margin-bottom: 10px;
      font-size: .8rem;
      color: #2c3e50;
    }
    .debug-item {
      margin: 5px 0;
      font-size: 12px;
      line-height: 24px;
    }
    .debug-key {
      width: 60px;
      text-align: right;
      display: inline-block;
      margin-right: 10px;
      color: #2c3e50;
    }
    .debug-value {
      display: inline-block;
      vertical-align: top;
      color: #2c3e50;
      width: 300px
    }
  }
`
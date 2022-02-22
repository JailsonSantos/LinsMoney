import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table{ 
    width: 100%;
    border-spacing: 0 0.5rem;

    margin: auto;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding:  1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{ 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title)
      }

      &.deposit{
        color: var(--green);
      }
      &.withdraw{
        color: var(--red);
      }
    }
  }

  
    
  @media (max-width: 560px){
    table{ 
      width: 100%;
      max-width: 360px;
      border-spacing: 0 0.5rem;
      font-size: 0.8rem;

      th{
      color: var(--text-body);
      font-weight: 400;
      padding:  0.5rem;
      text-align: left;
      line-height: 0.5rem;
    }

    td{ 
      padding: 0.5rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title)
      }

      &.deposit{
        color: var(--green);
      }
      &.withdraw{
        color: var(--red);
      }
    }
    }

  }

`;
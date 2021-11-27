import styled,{css} from 'styled-components'

import bedIcon from '../../assets/bed-left-side.svg'
import bathIcon from '../../assets/bathtub.svg'
import carIcon from '../../assets/car-compact.svg'


export const CardContainer = styled.div`
    border: 3px #f3f3f3 solid;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
    max-width: 220px;
    text-align: left;
    margin: 0 auto;

    opacity: ${props => props.active ? '1' : '0.5'} ;
    transform: scale(${props => props.active ? 1 : 0.5});
    &:hover {
      background-color: #f3f3f3;
      border-color: #f3f3f3;
    }
    img {
      max-width: calc(100%);
      margin: 0 auto;
      display: block;
    }
    .index {
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;
      line-height: 20px;
      font-size: 14px;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      padding: 0 10px;
    }
    .price {
      margin: 0;
      padding: 10px 0;
      font-weight: bold;
    }
    .details {
      position: relative;
      opacity: ${props => props.active ? 1 : 0};
    }
    .features {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align:center;
      li {
        padding-left: 24px;
        margin-right: 10px;
        display: inline-block;
        span {
          display: none;
        }
        &.icon-bed {
          background: url(${bedIcon}) left center;
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
        &.icon-bath {
          background: url(${bathIcon});
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
        &.icon-car {
          background: url(${carIcon});
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
      }
    }

`
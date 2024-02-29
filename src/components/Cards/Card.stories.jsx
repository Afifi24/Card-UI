import Card from "./Card";
import {data} from '../../data/Data';




export default {
  title: "Card",
  component: Card,
  tags:['autodocs'],
  args: {
    direction: "default",
    data:data,
    // slideImages:ColCardsData.slideImages
  },
  argTypes: {
    direction: {
      options: ["default", "row"],
      control: { type: "inline-radio" },
    },

  },
};

export const Component = (args) =><div style={{display:'flex', alignItems:'center',justifyContent:'center'}}><Card {...args} /></div> ;

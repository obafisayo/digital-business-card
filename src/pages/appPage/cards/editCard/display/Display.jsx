import React from 'react'
import Imgf1 from "../../../../../assets/cards/card1/Front.png"
import Imgb1 from "../../../../../assets/cards/card1/Back.png"
import Imgf2 from "../../../../../assets/cards/card2/Front.png"
import Imgb2 from "../../../../../assets/cards/card2/Back.png"
import { Button, ColorPicker } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const designImg = [
  {
    name: "classic",
    imgf: Imgf1,
    imgb: Imgb1
  },
  {
    name: "special",
    imgf: Imgf2,
    imgb: Imgb2
  }
]

const DEFAULT_COLOR = [
  {
    color: 'rgb(16, 142, 233)',
    percent: 0,
  },
  {
    color: 'rgb(135, 208, 104)',
    percent: 100,
  },
];

const Display = ({ person }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <h1 className="text-xl font-semibold mb-2">Design</h1>
        <div className="flex gap-4">
          {designImg.map((item, index) => (
            <div key={index} className="transition-all duration-200 ease-in-out group border-2 border-transparent rounded-lg hover:border-2 p-1 hover:border-textPrimary" >
              <div className="flex flex-col gap-2 border-2 p-1 signal-image rounded-md">
                <div className="w-20">
                  <img src={item.imgf} alt={`${item.name}-${index}`} 
                    className="w-full h-full"
                  />
                </div>
                <div className="w-20">
                  <img src={item.imgb} alt={`${item.name}-${index}`} 
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h1 className='font-semibold text-brandGray'>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-2">Color</h1>
        <div className="flex gap-2">
          <ColorPicker
            defaultValue={DEFAULT_COLOR}
            allowClear
            // showText
            mode={['single', 'gradient']}
            onChangeComplete={(color) => {
              console.log(color.toCssString());
            }}
          />
          {["red", "blue", "green", "purple", "yellow", "cyan"]
          .map((color, index) => (
            <div key={index} className="border rounded-[5px] w-[30px] py-[3px] px-[3px] hover:border-primary bg-white transition-all duration-200 ease-out">
              <div style={{ backgroundColor: color }} className={`w-full h-full rounded-[3px]`}></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-2">Logo</h1>
        <div className="flex gap-20 w-full items-center">
          <div className='w-20 h-20 p-2 border-2 border-textPrimary rounded-lg'>
            <img src={person.logo} alt="" className='w-full' />
          </div>
          <Button type='primary' shape='round' icon={<UploadOutlined />} >Upload Logo</Button>
        </div>
      </div>
    </div>
  )
}

export default Display;

import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
    <p className="font-notosanslao">20 ລາຍການ</p>
    <div>
      <div className="flex items-center gap-1 font-notosanslao">
        <button className="btn-primary btn-sm btn text-white">
          ກັບຄືນ
        </button>
        <button className="btn-sm btn">1</button>
        <button className="btn-active btn-sm btn">2</button>
        <button className="btn-sm btn">3</button>
        <button className="btn-sm btn">4</button>
        <button className="btn-primary btn-sm btn text-white">
          ໄປໜ້າ
        </button>
      </div>
    </div>
  </div>
  )
}

export default Pagination
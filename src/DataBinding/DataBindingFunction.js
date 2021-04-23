import React from 'react'

export default function DataBindingFunction() {
    let a = "abc"
    let content = "xyz"

    const xuatThongTin = (name, age) => {
        return (
            <div>
                <p>{name}</p>
                <p>{age}</p>
            </div>
            )
    }
    return (
        <div>
            <p>{a}</p>
            <p>{content}</p>
            {xuatThongTin("ppp", 22)}
        </div>
    )
}

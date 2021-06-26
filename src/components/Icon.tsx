import React from 'react'

const Icon = ({
    name,
    className,
    color,
}: {
    name: string
    className?: string
    color?: string
}) => {
    return (
        <img
            className={`${className} text-${color}`}
            src={`/icons/${name}.svg`}
            draggable="false"
        />
    )
}

export default Icon

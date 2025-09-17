
type Props = {
    title: string
    data: string
}

export const DataBox = (props: Props) => {

    const { title, data } = props

    return (
        <div className="w-full space-y-6 text-center">
        <h1 className="w-full md:text-4xl text-2xl text-primary font-bold">
          {title}
        </h1>
        <p className="text-gray-700 md:text-lg text-base text-justify leading-relaxed max-w-none" dangerouslySetInnerHTML={{__html: data}}>
        </p>
      </div>
    )

}
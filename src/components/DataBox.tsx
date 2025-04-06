
type Props = {
    title: string
    data: string
}

export const DataBox = (props: Props) => {

    const { title, data } = props

    return (
        <div className="md:w-[60%] w-full space-y-6">
        <h1 className="w-full text-center md:text-4xl text-2xl text-primary font-bold">
          {title}
        </h1>
        <p className="text-gray-600 md:text-lg text text-justify" dangerouslySetInnerHTML={{__html: data}}>
        </p>
      </div>
    )

}
import {memo, useState} from 'react';
import TableSkeleton from "../../utils/loader/TableSkeleton";

function ProductsTable({list}) {
    const [sortTitle , setSortTitle] = useState('')
    const [isLarge , setIsLarge] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    const toggleSort = (title) => {
        setSortTitle(title)
        setIsLarge(!isLarge)
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table data-testid={'productsTable'} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        title
                    </th>
                    <th scope="col" className="px-6 py-3 flex items-center">
                        price
                        <span data-testid={'sortPrice'} onClick={() => toggleSort('price')} className={'cursor-pointer'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true"
                                 fill="currentColor" viewBox="0 0 320 512">
                                <path
                                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                            </svg>
                        </span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        rating
                    </th>
                    <th scope="col" className="px-6 py-3">
                        image
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    list ?
                    list
                        .sort((a, b) => ((isLarge ? a[sortTitle] < b[sortTitle] : a[sortTitle] > b[sortTitle]) ? 1 : -1))
                        .map(({id,title,price,category,rating,image}) =>
                            <tr data-testid={'productRow'} key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th data-testid='title' scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {title}
                                </th>
                                <td data-testid='price' className="px-6 py-4">
                                    {price}
                                </td>
                                <td data-testid='category' className="px-6 py-4">
                                    {category}
                                </td>
                                <td data-testid='rating' className="px-6 py-4">
                                    {rating?.rate.toString()} / 5
                                </td>
                                <td data-testid='image' className="px-6 py-4 text-right">
                                    <img
                                        onLoad={() => {
                                            setIsLoaded(true);
                                        }}
                                        className={isLoaded ? null : 'animate-pulse bg-teal-100 h-10 rounded-md w-full mb-3'}
                                        loading={'lazy'} src={image} width={100} height={100} alt={title}/>
                                </td>
                            </tr>
                        ) :
                        <TableSkeleton trCount={4} counter={5}/>
                }
                </tbody>
            </table>
        </div>
    );
}

export default memo(ProductsTable);

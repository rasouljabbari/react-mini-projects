import {useRemove} from "../utils/custom-hooks/useRemove";
import {renderHook, act} from "@testing-library/react";

describe('useRemove', function () {

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ];

    test('should remove an item from the items list' , () => {

        const { result } = renderHook(() => useRemove());

        act(() => {
            result.current[1](products, 2);
        });

        expect(result.current[0]).toEqual([
            { id: 1, name: 'Product 1' },
            { id: 3, name: 'Product 3' },
        ]);
    })
});
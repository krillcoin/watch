export const types = {
    FETCH_LATEST_BLOCKS: "FETCH_LATEST_BLOCKS",
};

export const initial = {
    latest: []
};

export default function(state = initial, action) {
    switch (action.type) {
        case `${types.FETCH_LATEST_BLOCKS}_SUCCESS`:
            return { ...state, latest: action.payload.data };
        case `${types.FETCH_LATEST_BLOCKS}_FAILURE`:
            console.error('FETCH_LATEST_BLOCKS FAIL');
            return { ...state, latest: [] };
        default:
            return state;
    }
}

export const actions = {
    fetchLatestBlocks: data => ({
        type: types.FETCH_LATEST_BLOCKS,
        payload: {
            request:{
                url:'/blocks/latest',
                // params: {
                //     filter: {
                //         where: {
                //             slug: slug
                //         }
                //     }
                // }
            }
        }
    })
};

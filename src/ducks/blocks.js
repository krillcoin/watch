export const types = {
    FETCH_LATEST_BLOCKS: "FETCH_LATEST_BLOCKS",
    FETCH_BLOCK: "FETCH_BLOCK",
};

export const initial = {
    latest: [],
    single: null
};

export default function(state = initial, action) {
    switch (action.type) {
        case `${types.FETCH_LATEST_BLOCKS}_SUCCESS`:
            return { ...state, latest: action.payload.data };
        case `${types.FETCH_LATEST_BLOCKS}_FAILURE`:
            console.error('FETCH_LATEST_BLOCKS FAIL');
            return { ...state, latest: [] };

        case `${types.FETCH_BLOCK}_SUCCESS`:
            console.log('FETCH_BLOCK ', action.payload)
            return { ...state, single: action.payload.data };
        case `${types.FETCH_BLOCK}_FAILURE`:
            console.error('FETCH_BLOCK FAIL');
            return { ...state, single: null };
        default:
            return state;
    }
}

export const actions = {
    fetchLatestBlocks: data => ({
        type: types.FETCH_LATEST_BLOCKS,
        payload: {
            request:{
                url:'/blocks/latest'
            }
        }
    }),
    fetchBlock: height => ({
        type: types.FETCH_BLOCK,
        payload: {
            request:{
                url:`/Blocks/${height}`,
                type: 'GET',
                params: {
                    filter: {
                        include: 'transactions'
                    }
                }
            }
        }
    })
};

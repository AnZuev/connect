/* @flow */

import type {
    TestFunction,
} from 'flowtype/tests';

import type {
    TestCardanoSignTransactionPayload,
    ExpectedCardanoSignTransactionResponse,
} from 'flowtype/tests/cardano-sign-transaction';

export const cardanoSignTransaction = (): TestFunction => {
    const inputs = [
        {
            prev_hash: '2effff328b76a8113e32a218f7af99e77768289c9201e8d26a9cda0edaf59bfd',
            path: "m/44'/1815'/0'/0/0",
            // address_n: [2147483692, 2147485463, 2147483648, 0, 0],
            prev_index: 0,
            type: 0,
        },
    ];
    const outputs = [
        {
            address: '2w1sdSJu3GVeNrv8NVHmWNBqK6ssW84An4pExajjdFgXx6k4gksoo6CP1qTwbE34qjKEHZtUKGxY1GMkApUnNEMwGPTgLc7Yghs',
            amount: '1000000',
        },
        {
            path: "m/44'/1815'/0'/0/1",
            // address_n: [2147483692, 2147485463, 2147483648, 0, 1],
            amount: '7120787',
        },
    ];
    const transactions = [
        '839f8200d81858248258208f088493a600c7d897ef89caeb060e8e8137a1e5aa52e32f6262ec5a087341a6008200d81858248258208f088493a600c7d897ef89caeb060e8e8137a1e5aa52e32f6262ec5a087341a601ff9f8282d818583e83581c3a043fc1baa52fe4df2be89c689c953a52e7c13e51551ef5a3ed1e3da101581a5818360a746c532b81f364ce25168befa6cb2e29d5eccc4883bc001a90ce7a581a007e86118282d818584283581cc52ea4de5aacc58e0fab8b1a55e8bc194c6fd22eebd93fab56cf2789a101581e581c8c44aea4dee0952907690336fa16773c53257ec002dbd219d3970747001a409c205e01ffa0',
    ];

    const testPayloads: Array<TestCardanoSignTransactionPayload> = [
        {
            method: 'cardanoSignTransaction',
            inputs,
            outputs,
            transactions,
        },
    ];

    const expectedResponses: Array<ExpectedCardanoSignTransactionResponse> = [
        {
            payload: {
                hash: '48f283cc388d4cd0bbe2ce59f8d09d59a5a76c24c9c215b843a625c5a868d906',
                body: '82839f8200d81858248258202effff328b76a8113e32a218f7af99e77768289c9201e8d26a9cda0edaf59bfd00ff9f8282d818583e83581c171b0b84d398019af495be76be837a0e87e2953bd3c2477bcfd6502aa101581a5818360a746c532b80f39f48f64f86b4335dda2157768f58b395001a9b608a161a000f42408282d818583e83581cac35b4c10f51b6cea961492944e905ec48c94f939d06af836b6f6462a101581a581868c5491437fcb3dbc4ac1d144f03af8b5cd24815c4b24959001a6a6121911a006ca793ffa0818200d8185885825840901fe8901937674e1536e5b0068d032bd2dc88e442e608b0438784be3c36c67fc5bf86092fb4aff15cb40606808d74ad71b33b6399e2da2811f98c105f154ecf5840e98d5c2326d5cc19b58c15704ace6a6af78b454992ac1b0760c20486224a323007b73152467ce5374774eedc9c1952dc3bab9cf8963afe13f94828655872fd0c',
            },
        },
    ];

    const testName = 'CardanoSignTransaction';

    return {
        testName,
        testPayloads,
        expectedResponses,
    };
};

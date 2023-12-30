import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'osmosis',
  apis: {
    rest: [
      {
        address: 'https://osmosis.stakesystems.io/',
        provider: 'stakesystems'
      }
    ]
  },
  slip44: 118
};
export default chain;

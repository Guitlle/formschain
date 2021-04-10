import { render, screen, waitFor } from '@testing-library/react';
import {ArweaveProvider, arweave, ArweaveContext} from './Context.js';

test('test arweave login', async () => {
  let key = await arweave.wallets.generate();
  let address = await arweave.wallets.jwkToAddress(key);

  render(
    <ArweaveProvider>
      <ArweaveContext.Consumer>
        { (ctx) => {
          if (ctx.sessionKey == null) ctx.setKey(key);
          return (
            <p>
              {(ctx.sessionAddress == null)?<span>Logged out</span>: <span>Logged in {ctx.sessionAddress}</span> }
              <span>{ctx.balance == null? 'No balance yet': 'balance ' + ctx.balance.toString()}</span>
            </p>
          );
        }}
      </ArweaveContext.Consumer>
    </ArweaveProvider>);

  expect(screen.getByText('Logged out').textContent);
  await waitFor(() => expect(screen.getByText(/logged in/i)), {timeout: 5000});
  expect(screen.getByText('Logged in ' + address));
  await waitFor(() => expect(screen.getByText(/^balance /i)), {timeout: 5000});
  expect(screen.getByText(/balance 0/i))
});

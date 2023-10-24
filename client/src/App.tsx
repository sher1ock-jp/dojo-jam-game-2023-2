import { useDojo } from './DojoContext';
// import { Direction, } from './dojo/createSystemCalls'
// @ts-ignore
import { useComponentValue } from "@latticexyz/react";
// @ts-ignore
import { Entity } from '@latticexyz/recs';
import { useEffect } from 'react';
import { setComponentsFromGraphQLEntities } from '@dojoengine/utils';

function App() {
  const {
    setup: {
      systemCalls: { register_land },
      components,
      network: { graphSdk, contractComponents }
    },
    account: { create, list, select, account, isDeploying }
  } = useDojo();

  console.log("account", account);

  // extract query
  const { getEntities } = graphSdk()

  // entity id - this example uses the account address as the entity id
  const entityId = account.address.toString();

  // get current component values
  const land = useComponentValue(components.Land, entityId as Entity);

  console.log("land", land);

  // use graphql to current state data
  useEffect(() => {
    if (!entityId) return;

    const fetchData = async () => {
      try {
        const { data } = await getEntities();
        if (data && data.entities) {
          setComponentsFromGraphQLEntities(contractComponents, data.entities.edges);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityId, contractComponents]);


  return (
    <>
      <button onClick={create}>{isDeploying ? "deploying burner" : "create burner"}</button>
      <div className="card">
        select signer:{" "}
        <select onChange={e => select(e.target.value)}>
          {list().map((account, index) => {
            return <option value={account.address} key={index}>{account.address}</option>
          })}i
        </select>
      </div>
      <div className="card">
        <button onClick={() => register_land(account,"test_name",1)}>Spawn</button>
      </div>
      {/* <div className="card">
        <button onClick={() => move(account, Direction.Up)}>Move Up</button> <br />
        <button onClick={() => move(account, Direction.Left)}>Move Left</button>
        <button onClick={() => move(account, Direction.Right)}>Move Right</button> <br />
        <button onClick={() => move(account, Direction.Down)}>Move Down</button>
      </div> */}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Card, Col, Input, Row, Steps } from "antd";
import { useApolloClient, useMutation, useQuery } from "@apollo/react-hooks";
import { IEntity } from "../typings/IEntity";
import EntityEditCard from "../components/CreatePage/EntityEditCard";
import { MUTATION } from "../graphql/mutation";
import {
  FontSizeOutlined,
  EditOutlined,
  CrownOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import QUERIES from "../graphql/queries";

const { Search } = Input;
const { Step } = Steps;

const CreatePage = (props: RouteComponentProps<any, any, any>) => {
  const [entities, setEntities] = useState([] as IEntity[]);
  const [mutationGetEntities] = useMutation(MUTATION.GET_ENTITIES_BY_WORD);
  const {} = useQuery(QUERIES.getEntity, {
    skip: !props.location.state,
    variables: {
      id: props.location.state && props.location.state.id,
    },
    onCompleted: (entity) => {
      console.log(entity);
      if (entity) setEntities([entity.getEntity]);
    },
  });
  const client = useApolloClient();
  const { data: step } = useQuery(QUERIES.GET_STEP_CLIENT);
  const { data } = useQuery(QUERIES.GET_COUNT_ENTITIES);
  const [countEntities, setCountEntities] = useState(
    data ? data.getCountEntities : 1
  );

  const handleFinish = async (search: string) => {
    const res = await mutationGetEntities({
      variables: {
        word: search.toLowerCase(),
      },
    });
    if (res.data) {
      setEntities(res.data.getEntitiesByWord);
      client.writeData({
        data: {
          step: 1,
        },
      });
    }
  };

  useEffect(() => {
    client.writeData({
      data: {
        step: 0,
      },
    });
  }, [client]);

  useEffect(() => {
    if (step.step === 3) {
      setTimeout(() => {
        setCountEntities(5);
      }, 2000);
    }
  }, [step.step]);

  const isSteps = entities.length > 0 ? !entities[0].isCreate : true;
  return (
    <Row>
      <Col span={24}>
        <Card size={"small"}>
          {isSteps && countEntities <= 3 && (
            <Steps current={step.step}>
              <Step
                icon={<FontSizeOutlined />}
                title="First word"
                description="Input word for search"
              />
              <Step
                icon={<EditOutlined />}
                title="Update"
                description="Do changes"
              />
              <Step
                icon={<CloudUploadOutlined />}
                title="Save"
                description="Click on button by 'Create'"
              />
              <Step
                icon={<CrownOutlined />}
                title="Keanu Reeves said: "
                description="You are amazing!"
              />
            </Steps>
          )}
          <Search
            placeholder="Input text for create entity of word"
            enterButton="Search"
            size="large"
            onSearch={handleFinish}
          />
        </Card>
      </Col>
      {entities.map((e: any, index: any) => {
        return (
          <Col flex="1" key={e.id || index}>
            <EntityEditCard entity={e} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CreatePage;

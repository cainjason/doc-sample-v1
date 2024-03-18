import styled from "styled-components";

function Body() {
  return (
    <GridOptionContainer>
      <GridOption className="bg-pink-200 h-20 text-white w-full">
        <label>Option One</label>
        <image src="" className="" alt=""></image>
      </GridOption>
      <GridOption className="bg-blue-200 h-20 text-white w-full">
        <label>Option Two</label>
        <image src="" className="" alt=""></image>
      </GridOption>
      <GridOption className="bg-green-200 h-20 text-white w-full">
        <label>Option Three</label>
        <image src="" className="" alt=""></image>
      </GridOption>
      <GridOption className="bg-orange-200 h-20 text-white w-full">
        <label>Option Four</label>
        <image src="" className="" alt=""></image>
      </GridOption>
    </GridOptionContainer>
  );
}

export default Body;

const GridOptionContainer = styled.div``;

const GridOption = styled.div``;

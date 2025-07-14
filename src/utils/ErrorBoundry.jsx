import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDeriveStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex justify-center items-center uppercase text-4xl text-white font-bold bg-[#260F3B]">
          Something went wrong,Try clicking below button
          <button onClick={()=>window.location.reload()} className="px-5 py-3 rounded-2xl border-none bg-violet-600 text-white">refresh</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;

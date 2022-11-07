function Navigation() {
  return (
    <nav>
      <div class="grid grid-col-6 grid-flow-col gap-4 h-5 items-center text-sm">
        <div></div>
        <div className="flex justify-center">
          <a className="" href="/html/">
            Events
          </a>
          <a className="ml-4" href="/html/">
            Resources
          </a>
          <a className="ml-4" href="/html/">
            Bounties
          </a>
        </div>
        <div></div>
        <div></div>
        <div>
          <div>
            <a className="" href="/html/">
              Contributions
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navigation;

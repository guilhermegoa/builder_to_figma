export default function createComponent(component: any): InstanceNode {
  const instance: InstanceNode = component.createInstance()
  figma.currentPage.appendChild(instance)
  return instance
}
